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


// class function

class Student(var name: String, var id: String, var age: Int){
    fun greet(){
        print("Welcome... ")
    }
    
    fun display(name: String){
        print(name)
    } 
}

fun main(){
    val s1 = Student("Sesanth Kaarthik", "212AD192", 22)
    
    val s2 = Student("Sudharshan K T", "212AD210", 22)
    val s3 = Student("Abishek", "212AD101", 22)
    
    s1.greet()
    s1.display(s1.name)
}


// inheritance

open class ParentClass{
    var x: Int = 10
}

class ChildClass : ParentClass(){
    fun displayX(){
        print("x is "+x)
    }
}

fun main(){
    var c = ChildClass()
    c.displayX()
}


// for loop

fun main(){
    val items = listOf('a', 'b', 'c')

    for(char in items){
        println(char)
    }
}


fun main(){
    val items = listOf('a', 'b', 'c')

    for(i in 0..10){
        println(i)
    }
}


// Range

fun main(){
	val items = listOf('a', 'b', 'c')

	if(-1 !in 0..items.lastIndex){
    	println("-1 is out of range")
	}
}

// List
// Stores items in they order they stored
// 2 types of list here -> List and MutableList
// List is immutable and MutableList is mutable


// Immutable List
fun main(){
	var list: List<String> = listOf("One", "Two", "Three", "Four", "Five")
   //list[0] = "Zero"
   //list.add("Six") // we cannot add and modify this list because it is immutable
   print(list)
}


// MutableList
fun main(){
	var list: MutableList<String> = mutableListOf("One", "Two", "Three", "Four", "Five")
   list[0] = "Zero"
   list.add("Six")
   println(list)
   println("This list has ${list.count()} elements")
   print("Two" in list)
}


// Set
// unordered and doesnot allow duplicates, we cannot access by index
// 2 types of set here -> Set and MutableSet
// Set is immutable and MutableSet is mutable


// Immutable Set

fun main(){
	var readOnlySet = setOf("One", "Two", "Three", "Four", "Five", "Two", "Three")
   	println(readOnlySet)
   	println("This list has ${readOnlySet.count()} elements")
   	print("Two" in readOnlySet)
}


// Mutable Set

fun main(){
	var mutableSet = mutableSetOf("One", "Two", "Three", "Four", "Five", "Two", "Three")
   	println(mutableSet)
   	println("This list has ${mutableSet.count()} elements")
   	print("Two" in mutableSet)
}

fun main(){
	var mutableSet: MutableSet<String> = mutableSetOf("One", "Two", "Three", "Four", "Five", "Two", "Three")
   	println(mutableSet)
    mutableSet.add("Six")
    println(mutableSet)
   	println("This list has ${mutableSet.count()} elements")
   	print("Two" in mutableSet)
    mutableSet.remove("One")
    println(mutableSet)
}


// Map
// Map is a collection of key-value pairs and accessed by key default
// 2 types of map here -> Map and MutableMap
// Map is immutable and MutableMap is mutable

Immutable Map

fun main(){
	var readOnlyMap: Map<String, Int> = mapOf("One" to 1, "Two" to 2, "Three" to 3, "Four" to 4, "Five" to 5)
   	println(readOnlyMap)
   	println("This list has ${readOnlyMap.count()} elements")
   	print("Two" in readOnlyMap)
}


// Mutable Map

fun main(){
	var mutableMap: MutableMap<String, Int> = mutableMapOf("One" to 1, "Two" to 2, "Three" to 3, "Four" to 4, "Five" to 5)
   	println(mutableMap)
    println("value of One key ${mutableMap["One"]}")
    mutableMap["Six"] =  6
    println(mutableMap)
   	println("This list has ${mutableMap.count()} elements")
   	println("Two" in mutableMap)
    mutableMap.remove("One")
    println(mutableMap)
}


// accessing items with keys and values
fun main(){
	var mutableMap: MutableMap<String, Int> = mutableMapOf("One" to 1, "Two" to 2, "Three" to 3, "Four" to 4, "Five" to 5)
   	println(mutableMap)
    println("value of One key ${mutableMap["One"]}")
    mutableMap["Six"] =  6
    println(mutableMap)
   	println("This list has ${mutableMap.count()} elements")
   	println("Two" in mutableMap)
    println("Two" in mutableMap.keys)
    println(3 in mutableMap.values)
    mutableMap.remove("One")
    println(mutableMap)
}