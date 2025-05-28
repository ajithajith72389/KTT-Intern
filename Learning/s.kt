fun main(){
    println("hello Aj")
    print("Good")
    println(" Morning")
    print( 3 + 4 - 2)

    val num = 18
    val name = "Ajith"
    print("$num $name")

    val num: Int = 18
    val name: String = "Ajith"
    print("$num $name")

    // error
    val num
    num = 7
    print(num)

    // This works fine
    val num: String
    num = 7
    print(num)

    val num: Int = 18
    val name: String = "Ajith"
    print("Hii " + name)
}


fun main(){
    val num: Int = 3
    val result = when(num){
        1 -> "Monday"
        2 -> "Tuesday"
        3 -> "Wednesday"
        4 -> "Thursday"
        5 -> "Friday"
        6 -> "saturday"
        7 -> "Sunday"
        else -> "Invalid Number"
    }
    print( result)
}


// with return
fun sum(a: Int, b: Int): Int{
    return a+b
}
fun main(){
    var sum1 = sum(10, 11);
    var sum2 = sum(18, 17);
    println(sum1)
    println(sum2)
}


// without return
fun sum(a: Int, b: Int){
   println(a+b)
}
fun main(){
    var sum1 = sum(10, 11);
    var sum2 = sum(18, 17);
}


// oop

class Student{
    var name = ""
    var id = ""
    var age = 0
}

fun main(){
    val s1 = Student()
    s1.name = "Ajith"
    s1.id = "212AD104"
    s1.age = 22
    
    println(s1.name)
    println(s1.id)
    println(s1.age)
}


// oop with 2 objects
class Student{
    var name = ""
    var id = ""
    var age = 0
}

fun main(){
    val s1 = Student()
    s1.name = "Ajith"
    s1.id = "212AD104"
    s1.age = 22
    
    val s2 = Student()
    s2.name = "Sahith"
    s2.id = "212AD184"
    s2.age = 22
    
    println(s1.name)
    println(s1.id)
    println(s1.age)
    
    println(s2.name)
    println(s2.id)
    println(s2.age)
}

class Student(var name: String, var id: String, var age: Int)

fun main(){
    val s1 = Student("Sesanth Kaarthik", "212AD192", 22)
//     s1.name = "Ajith"
//     s1.id = "212AD104"
//     s1.age = 22
    
    val s2 = Student("Sudharshan K T", "212AD210", 22)
    val s3 = Student("Abishek", "212AD101", 22)
//     s2.name = "Sahith"
//     s2.id = "212AD184"
//     s2.age = 22
    
    println(s1.name)
    println(s1.id)
    println(s1.age)
    
    println(s2.name)
    println(s2.id)
    println(s2.age)
    
    println(s3.name)
    println(s3.id)
    println(s3.age)
}