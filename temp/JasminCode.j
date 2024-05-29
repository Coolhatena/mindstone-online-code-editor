.class public JasminCode
.super java/lang/Object
.method public static main([Ljava/lang/String;)V
.limit stack 18
.limit locals 3

ldc 5
istore_0

ldc 0
istore_1

ldc 0
istore_2

iload_0
ldc 0
if_icmple endIfLabel0
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es positivo.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

goto endIfLabel0

endIfLabel0:
iload_0
ldc 2
irem

ldc 0
if_icmpne elseLabel2
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es par.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

goto endIfLabel1

elseLabel2:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es impar.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

endIfLabel1:
iload_0
ldc 0
if_icmple elifLabel4
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es positivo.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

goto endIfLabel3

elifLabel4:
iload_0
ldc 0
if_icmpge elseLabel5
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es negativo.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

goto endIfLabel3

elseLabel5:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es cero.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

endIfLabel3:
whileStartLabel6:
iload_1
iload_0
if_icmpgt whileEndLabel7
iload_1
iload_2
iadd
istore_2

iinc 1 1
goto whileStartLabel6
whileEndLabel7:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "La suma de los primeros números naturales es:"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iload_0
invokestatic java/lang/Integer/toString(I)Ljava/lang/String;
getstatic java/lang/System/out Ljava/io/PrintStream;
swap
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iload_2
invokestatic java/lang/Integer/toString(I)Ljava/lang/String;
getstatic java/lang/System/out Ljava/io/PrintStream;
swap
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

return
.end method