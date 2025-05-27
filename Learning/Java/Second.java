package Learning.Java;

class Second {
    public static void main(String[] args) {
        Student student = new Student("Ajith", 21);
        System.out.println("Name" + student.name);
        System.out.println("Age" + student.age);
        student.display();
    }
}