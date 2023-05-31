package Tuan1;

import java.util.Scanner;

public class BaiTap1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhập năm bạn cần kiểm tra:");
        int nam = sc.nextInt();
        if((nam % 4 ==0 && nam % 100!=0 && nam % 400!=0)||(nam %100==0 && nam%400==0)){
            System.out.println("La nam nhuan");
        } else {
            System.out.println("Khong phai nam nhuan");
        }
    }
}
