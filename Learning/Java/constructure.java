package Learning.Java;

public class constructure {
    int x;
    int birthYear;
    String birthMonth;

    public constructure(int y, int year , String month) {
        x = y;
        birthYear = year;
        birthMonth = month;
    }

     public static void main(String[] args) {
        constructure obj = new constructure(18, 2004, "April");
        System.out.println(obj.x);
        System.out.println(obj.birthYear + " " + obj.birthMonth);
     }
}