package Learning.Java;

abstract class Abstract {
    public String name = "Ajith";
    public int age = 21;

    public abstract void display();

    class Student extends Abstract {
        public String address = "Namakkal";

        public void display() {
            System.out.println("Displayed details");
        }

        
    }
    

}
