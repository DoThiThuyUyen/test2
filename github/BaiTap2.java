package Tuan1;

import java.util.Scanner;
public class BaiTap2 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap vao a: ");
        int a = sc.nextInt();
        System.out.println("Nhap vao b: ");
        int b = sc.nextInt();
        System.out.println("Nhap ky tu: ");
        char kiTu = sc.next().charAt(0);
        switch(kiTu){
            case '+':
                System.out.println("Ket qua la "+ (a+b));
                break;
            case '-':
                System.out.println("Ket qua la "+ (a-b));
                break;
            case '*':
                System.out.println("Ket qua la "+ (a*b));
                break;
            case '/':
                System.out.println("Ket qua la "+ (a/b));
                break;
        }
    }
}

