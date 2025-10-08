num1 = 0
num2 = 0
total = 0

print("Calculadora basica")
print("-------------------")

operation = input("Ingrese la operacion a realizar (+, -, *, /): ")
num1 = int(input("Ingrese el primer numero: "))
num2 = int(input("Ingrese el segundo numero: "))

if operation == "+":
    total = num1 + num2
    print("-----------------------")
    print("El resultado es:", total)
    print("-----------------------")
    exit()
elif operation == "-":
    total = num1 - num2
    print("-----------------------")
    print("El resultado es:", total)
    print("-----------------------")
    exit()
elif operation == "*":
    total = num1 * num2
    print("-----------------------")
    print("El resultado es:", total)
    print("-----------------------")
    exit()
elif operation == "/":
    total = num1 / num2
    print("-----------------------")
    print("El resultado es:", total)
    print("-----------------------")
    exit()
else:
    print("-------------------")
    print("Operacion no valida")
    print("-------------------")
    exit()

#     edad=int
# soborno=int
# input("cual es tu edad? ")
# if edad>=18{
#     print("puedes pasar")
#     }elseif{
#         input("como nos vamos a arreglar? Dime un numero")
#         soborno>=50
#         print("puedes pasar")
#     } else{
#         print("vuelve cuando cumplas 18 chiquillo")
#     }