package Learning.Java;

public class Main {
    int x = 5;
    String fname = "Ajith";
    String lname = "Kumar";
    int age = 21;

    static void staticFunc() {
        System.out.println("Static methods can be called without creating objects");
    }

    public void nonStaticFunc() {
        System.out.println("Non-static methods can be called only after creating objects");
    }

    public void fullThrottle() {
        System.out.println("The car is going at full throttle");
    }

    public void speed(int speed) {
        System.out.println("The car is going at " + speed + "mph");
    }

    public static void main(String[] args) {
        Main m = new Main();
        Main n = new Main();
        n.x = 25;
        System.out.println("First object:" + m.x);
        System.out.println("Second object after value change:" + n.x);

        System.out.println("Name:" + m.fname + " " + m.lname + ", " + "Age:" + m.age);

        staticFunc();
        m.nonStaticFunc();
        m.fullThrottle();
        m.speed(260);
    }

}
