package Learning.Java;

public class classesAndObjects {
    int x= 5;

    public static void main(String[] args) {
        classesAndObjects obj1 = new classesAndObjects();
        classesAndObjects obj2 = new classesAndObjects();

        System.out.println(obj1.x);
        System.out.println(obj2.x);
    }
}
