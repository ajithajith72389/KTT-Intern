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


// if else

fun main(){
    var x: Int = 10
    if ( x % 2 == 0){
        print("$x is even")
    } else{
        print("$x is odd")
    }
}


// when 
// use when keyword instead of if else
// use when keyword when you have a conditional expression with multiple branches

fun main(){
    var x: Int = 1
    var result = when(x){
        1 -> "one"
        2 -> "two"
        3 -> "three"
        else -> "Invalid"
    }
    print(result)
}

// when expression without a subject
fun main(){
    val x = "1"
    val result = when{
        x == "1" -> "one"
        x == "2" -> "two"
        x == "3" -> "three"
        else -> "Invalid"
    }
    print(result)
}


// guessing game with when

import kotlin.random.Random

fun main() {
    val firstResult = Random.nextInt(2)
    val secondResult = Random.nextInt(2)
    val result = when{
        firstResult == secondResult -> "You win"
        firstResult != secondResult -> "You lose"
        else -> "Invalid"
    }
    print(result)
}


// guessing game with if else

import kotlin.random.Random

fun main() {
    val firstResult = Random.nextInt(2)
    val secondResult = Random.nextInt(2)
        if(firstResult == secondResult) print("You win")
        else print("You lose")
    
}


//Using a when expression, update the following program so that it prints the corresponding actions 
//when you input the names of game console buttons.

// when

fun main(){
    val Button: String = "A"
    
    val result = when(Button){
        "A" -> "Yes"
        "B" -> "No"
        "X" -> "Menu"
        "Y" -> "Nothing"
        else -> "There is not such button"
    }
    println("You clicked $result button")
}



//loop
//You have a program that counts pizza slices until there’s a whole pizza with 8 slices.


// while loop
fun main(){
	var pizzaSlices = 0
    while (pizzaSlices <= 8){
        println("There's only $pizzaSlices slice/s of pizza :(")
    	pizzaSlices++
        
    }
    println("There are $pizzaSlices slices of pizza. Hooray! We have a whole pizza! :D")
}


// do while loop

fun main(){
	var pizzaSlices = 0
    do{
        println("There's only $pizzaSlices slice/s of pizza :(")
    	pizzaSlices++
        
    }	while (pizzaSlices <= 8)
    println("There are $pizzaSlices slices of pizza. Hooray! We have a whole pizza! :D")
}


/*
Write a program that simulates the Fizz buzz game. 
Your task is to print numbers from 1 to 100 incrementally, 
replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz". 
Any number divisible by both 3 and 5 must be replaced with the word "fizzbuzz".
*/

fun main(){
	for( number in 1..100){
        var result = when{
            number % 3 == 0 && number % 5 == 0 -> "fizzbuzz"
            number % 3 == 0 -> "fizz"
            number % 5 == 0 -> "buzz"
            else -> number
        }
        println(result)
    }
}


//You have a list of words. Use for and if to print only the words that start with the letter l.

fun main() {
    val words = listOf("dinosaur", "limousine", "magazine", "language")
    for( word in words){
        if ( word[0] == 'l'){
            println(word)
        }
    }
}


// Write a function called circleArea that takes the radius of a circle in integer format 
// as a parameter and outputs the area of that circle.

import kotlin.math.PI

fun circleArea(r: Int): Double{
    return PI * r * r
}

fun main() {
    println(circleArea(2))
}


fun intervalInSeconds(hours: Int = 0, minutes: Int = 0, seconds: Int = 0) =
    ((hours * 60) + minutes) * 60 + seconds

fun main() {
    println(intervalInSeconds(1, 20, 15))
    println(intervalInSeconds(minutes = 1, seconds = 25))
    println(intervalInSeconds( hours = 2))
    println(intervalInSeconds(minutes = 10))
    println(intervalInSeconds(hours = 1, seconds = 1))
}


// null

fun main(){
    var s: String? = "AK"
    s = null
    print(s)
}


// throws error
// By default, a type is not allowed to accept null values
fun main(){
    var s: String = "AK" // cannot be null
    s = null
    print(s)
}


// lambda expression

val square = { num: Int -> num * num}
fun main(){
    var num = 6
    print(square(num))
}


val square = { num: Int -> 
    var sq = num * num
    
}
fun main(){
    var num = 6
    print(square(num))
}

val numbers = listOf(1, -2, 3, -4, 5, -6)

val positives = numbers.filter ({ x -> x > 0 })

//val isNegative = { x: Int -> x < 0 }
val negatives = numbers.filter({x -> x < 0})

println(positives)
// [1, 3, 5]
println(negatives)
// [-2, -4, -6]


fun main() {
    val actions = listOf("title", "year", "author")
    val prefix = "https://example.com/book-info"
    val id = 5
    val urls = actions.map{ action -> "$prefix/$id/$action"}
    println(urls)
}



fun repeatN(n: Int, action: () -> Unit) {
    for ( i in 1..5){
        action()
    }
}

fun main() {
    repeatN(5){
        println("Hello")
    }
}



// Extention function


fun Int.isPositive(): Boolean{
    if ( this > 0) return true
    else return false
}

fun main() {
    println(1.isPositive())
    // true
}


fun String.toLowercaseString(): String{
    return this.lowercase()
}

fun main() {
    println("Hello World!".toLowercaseString())
    // hello world!
}



/* 
In Kotlin, to declare a class as inheritable, you must mark it with the open keyword. 
By default, all classes in Kotlin are final, which means they cannot be inherited unless explicitly specified as open.
*/

// Override
open class Parent {
    open val info: String = "I am a parent"
}

class Child : Parent() {
    override val info: String = "I am a child"
}

fun main() {
    val child = Child()
    println(child.info)  // Output: I am a child
}