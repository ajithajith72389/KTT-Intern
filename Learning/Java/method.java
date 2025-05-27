package Learning.Java;


public class method {
    public static void main(String[] args) {
        Student student  = new Student("John", 1);
        student.displayDetail("Student Details");
        
    }
}

class Student {
    String name;
    private int id;
    public String age;

    public Student(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public void displayDetail(String headers){
        System.out.println(headers);
        System.out.println("Name " + getName());
        System.out.println("ID " + getID());
    }

    public int getID() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void display() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'display'");
    }
}

