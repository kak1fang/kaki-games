import java.util.ArrayList;
public class Digits{
    
    public Digits（int input）{
        int lmao;
        lmao = input.toString().getLength();    
        List<int> memelist = new ArrayList<>();
        for(int x= 0;x<lmao;x++){
            memelist.add(input.charAt(x));
        }
        System.out.println(memelist);
    }
}