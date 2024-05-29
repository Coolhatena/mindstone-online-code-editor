import { promises as fs } from 'fs';
import path from 'path';
import { exec as execCb } from 'child_process';
import util from 'util';

const exec = util.promisify(execCb);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { code, filename } = req.body;

      if (!code || !filename) {
        return res.status(400).json({ error: 'El código y el nombre del archivo son necesarios' });
      }

      // Asegurarse de que la carpeta 'temp' existe
      const tempDir = path.join(process.cwd(), 'temp');
      await fs.mkdir(tempDir, { recursive: true });

      // Guardar el archivo .j en el servidor
      const filePath = path.join(tempDir, `${filename}.j`);
      await fs.writeFile(filePath, code, 'utf8');

      // Ejecutar el comando Java
      try {
        await exec(`java -jar jasmin.jar -d ./temp ${filePath}`);
        const classFilePath = filePath.replace('.j', '.class');

        try {
          const classFile = await fs.readFile(classFilePath);
          res.setHeader('Content-Type', 'application/octet-stream');
          res.setHeader('Content-Disposition', `attachment; filename=${filename}.class`);
          return res.send(classFile);
        } catch (readError) {
          console.error(`Error al leer el archivo .class: ${readError}`);
          return res.status(500).json({ error: 'Error al leer el archivo .class' });
        }
      } catch (execError) {
        console.error(`Error al ejecutar Jasmin: ${execError}`);
        return res.status(500).json({ error: `Error al ejecutar Jasmin: ${execError.message}` });
      }
    } catch (error) {
      console.error(`Error en el servidor: ${error}`);
      return res.status(500).json({ error: `Error en el servidor: ${error.message}` });
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}
