package Learning.Java;

public class Interfaces {
    public static void main(String[] args) {
        Circle circle = new Circle(5.0);
        Rectangle rectangle = new Rectangle(5, 10);
        System.out.println("Circle " + circle.calculateArea());
        System.out.println("Rectangle " + rectangle.calculateArea());
    }
}

interface shape {
    double calculateArea();
}

class Circle implements shape {
    private double r;

    public Circle(double r) {
        this.r = r;
    }

    public double calculateArea() {
        return Math.PI * r * r;
    }
}

class Rectangle implements shape {
    private int height;
    private int width;

    public Rectangle(int height, int width) {
        this.height = height;
        this.width = width;
    }

    public double calculateArea() {
        return height * width;
    }
}
