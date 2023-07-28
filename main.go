package main

import "fmt"

func main() {
	fmt.Println("------Againts Street------")
	fmt.Println("")
	fmt.Println("")
	fmt.Println("--kasir--")
	fmt.Println("")
	fmt.Println("")

	var name string
	fmt.Print("Masukkan Nama Lau : ")
	fmt.Scanln((&name))
	fmt.Println("")
	if name == "" {
		fmt.Println("ANDA TIDAK BOLEH MASUK !")
		return
	} else {
		fmt.Println("ANDA BOLEH MASUK !")
	}
	fmt.Println("")
	var age int
	var money int
	fmt.Print("Masukkan umur anda : ")
	fmt.Scanln(&age)
	fmt.Println("")
	fmt.Print("Masukan uang anda : ")
	fmt.Scanln(&money)
	fmt.Println("")

	var drink string
	var price int
	if age < 17 {
		drink = "juice"
		price = 50000
	} else {
		drink = "anggur"
		price = 300000
	}

	if money < price {
		fmt.Println("UANG ANDA TIDAK CUKUP, ANDA HARUS SEGERA PULANG !")
		return
	}

	change := money - price
	fmt.Printf("Anda bisa pesan %s. Sisa uang anda: %d\n", drink, change)
}
