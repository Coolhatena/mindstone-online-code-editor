.class public JasminCode
.super java/lang/Object
.method public static main([Ljava/lang/String;)V
.limit stack 16
.limit locals 3

ldc 10
istore_0

ldc 0
istore_1

ldc 6
istore_2

whileStartLabel0:
iload_1
ldc 3
if_icmpge whileEndLabel1
iload_1
invokestatic java/lang/Integer/toString(I)Ljava/lang/String;
getstatic java/lang/System/out Ljava/io/PrintStream;
swap
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iload_2
ldc 1
if_icmplt elifLabel3
iload_2
ldc 3
if_icmpgt elifLabel3
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "numero en rango permitido"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iload_2
invokestatic java/lang/Integer/toString(I)Ljava/lang/String;
getstatic java/lang/System/out Ljava/io/PrintStream;
swap
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

goto endIfLabel2

elifLabel3:
iload_2
ldc 4
if_icmplt elseLabel4
iload_2
ldc 7
if_icmpgt elseLabel4
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "Numero en rango invalido"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iload_2
invokestatic java/lang/Integer/toString(I)Ljava/lang/String;
getstatic java/lang/System/out Ljava/io/PrintStream;
swap
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

goto endIfLabel2

elseLabel4:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "Número fuera de rango. Inténtalo de nuevo.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

iinc 1 1
endIfLabel2:
iload_1
ldc 3
if_icmpne endIfLabel5
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "Has alcanzado el máximo de intentos permitidos.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

whileStartLabel6:
iload_0
ldc 0
if_icmple whileEndLabel7
iload_0
invokestatic java/lang/Integer/toString(I)Ljava/lang/String;
getstatic java/lang/System/out Ljava/io/PrintStream;
swap
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

ldc 1
iload_0
isub
istore_0

goto whileStartLabel6
whileEndLabel7:
goto endIfLabel5

endIfLabel5:
iinc 1 1
goto whileStartLabel0
whileEndLabel1:
return
.end method