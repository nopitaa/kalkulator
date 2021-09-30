//Pesan Di Inspeksi
console.log("Selamat Anda Berhasil Menggunakan JavaScript Pada Website")

//Membuat objek yang terdapat properti data dan kondisi 
const calculator = {
		displayNumber: '0',
		operator: null,
		firstNumber: null,
		witingForSecondNumber: false
	};

//Mengupdate angka pada layar
	function updateDisplay() {
		document.querySelector("#displayNumber").innerHTML = calculator.displayNumber;
	}

//Menghapus angka pada layar
	function clearCalculator() {
		calculator.displayNumber = '0';
		calculator.operator = null;
		calculator.firstNumber = null;
		calculator.witingForSecondNumber = false;
	}

//Memasukan angka pada layar
	function inputDigit(digit) {
		if (calculator.witingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
		calculator.displayNumber = digit;
		} else {
		if (calculator.displayNumber === '0') {
			calculator.displayNumber = digit;
		} else {
			calculator.displayNumber += digit;
		}
		}
	}

//Variabel button untuk menginisialisasikan nilaielemen	
	const buttons = document.querySelectorAll('.button');
	for (let button of buttons) {
		button.addEventListener('click', function (event) {
		const target = event.target;
	
		if (target.classList.contains('clear')) {
			clearCalculator();
			updateDisplay();
			return;
		}
	
		if (target.classList.contains('negative')) {
			inverseNumber();
			updateDisplay();
			return;
		}
	
		if (target.classList.contains('equals')) {
			performCalculation();
			updateDisplay();
			return;
		}
	
		if (target.classList.contains('operator')) {
			handleOperator(target.innerText)
			updateDisplay();
			return;
		}
	
		inputDigit(target.innerHTML);
		updateDisplay();
		});
	}

//hanya perlu melakukan perkalian
//displayNumber dengan -1, terkecuali jika displayNumber masih bernilai ‘0’ maka
//perkalian tidak akan dilakukan
	function inverseNumber() {
		if (calculator.displayNumber === '0') {
		return;
		}
		calculator.displayNumber = calculator.displayNumber * -1;
	}

//Membuat fungsi menetapkan sebuah operator	
	function handleOperator(operator) {
		if (!calculator.witingForSecondNumber) {
		calculator.operator = operator;
		calculator.witingForSecondNumber = true;
		calculator.firstNumber = calculator.displayNumber;
		calculator.displayNumber ='0';
		} else {
		alert('Operator sudah ditetapkan');
		}
	}

//melakukan kalkulasi terhadap nilai - nilai yang terdapat pada objek	
	function performCalculation() {
		if (calculator.firstNumber == null || calculator.operator == null) {
		alert("Anda belum menetapkan operator");
		return;
		}
		let result = 0;
		if (calculator.operator === "+") {
		result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
		} else {
		result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
		}
		calculator.displayNumber = result;
	}