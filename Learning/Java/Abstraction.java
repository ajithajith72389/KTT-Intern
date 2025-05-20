package Learning.Java;

public class Abstraction {
    public static void main(String[] args) {
        TVRemote remote = new TVRemote();
        remote.trunON();
        remote.turnOFF();
    }

}

abstract class TV {
    abstract void trunON();

    abstract void turnOFF();
}

class TVRemote extends TV {
    @Override
    void trunON() {
        System.out.println("TV is truned ON");
    }

    @Override
    void turnOFF() {
        System.out.println("TV is truned OFF");
    }
}
