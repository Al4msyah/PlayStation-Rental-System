declare const require: (moduleName: string) => any;
declare const process: {
    stdin: any;
    stdout: any;
};

const readline = require('readline');

// Interface untuk mendefinisikan struktur data transaksi rental PlayStation
interface RentalTransaction {
    id: string;
    customerName: string;
    consoleType: string;
    durationHours: number;
    isMember: boolean;
    discount: number;
    totalCost: number;
}

// Array untuk menyimpan daftar transaksi selama sesi berjalan
let transactions: RentalTransaction[] = [];

// Setup readline untuk menerima input dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi bantuan untuk mengubah rl.question menjadi Promise agar mudah dibaca
function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

// Fungsi 1: Menghitung biaya rental dan diskon member (mengembalikan nilai objek)
function calculateRentalCost(consoleType: string, hours: number, isMember: boolean): { discount: number; total: number } {
    let hourlyRate: number = 0;

    // Percabangan untuk menentukan harga per jam berdasarkan jenis PS
    if (consoleType === "PS3") {
        hourlyRate = 5000;
    } else if (consoleType === "PS4") {
        hourlyRate = 10000;
    } else if (consoleType === "PS5") {
        hourlyRate = 15000;
    }

    // Operasi aritmatika perkalian
    let subtotal: number = hourlyRate * hours;
    let discount: number = 0;

    // Percabangan bersarang (3 tingkat) untuk validasi dan pemberian diskon member 10%
    if (isMember === true) {
        if (subtotal >= 50000) {
            if (hours >= 1 && hours <= 4) {
                discount = subtotal * 0.10;
            }
        }
    }

    let total: number = subtotal;
    // Compound assignment untuk mengurangi total dengan diskon
    total -= discount;

    return { discount, total };
}

// Fungsi 2: Menambah transaksi baru (Create - akan dilengkapi di Progress 3)
function createTransaction(): void {
    console.log("\n[INFO] Fitur Create akan diimplementasikan pada Progress 3.");
}

// Fungsi 3: Menampilkan data transaksi (Read - akan dilengkapi di Progress 4)
function readTransactions(): void {
    console.log("\n[INFO] Fitur Read akan diimplementasikan pada Progress 4.");
}

// Fungsi 4: Mengubah data transaksi (Update - akan dilengkapi di Progress 5)
function updateTransaction(): void {
    console.log("\n[INFO] Fitur Update akan diimplementasikan pada Progress 5.");
}

// Fungsi 5: Menghapus data transaksi (Delete - akan dilengkapi di Progress 5)
function deleteTransaction(): void {
    console.log("\n[INFO] Fitur Delete akan diimplementasikan pada Progress 5.");
}

// Fungsi 6: Mencari data transaksi (Search - akan dilengkapi di Progress 6)
function searchTransactions(): void {
    console.log("\n[INFO] Fitur Search akan diimplementasikan pada Progress 6.");
}

// Fungsi Utama: Menampilkan Main Menu berulang hingga user memilih keluar
async function mainMenu(): Promise<void> {
    let isRunning: boolean = true;

    while (isRunning) {
        console.log("\n==========================================");
        console.log("   PLAYSTATION RENTAL MANAGEMENT SYSTEM   ");
        console.log("==========================================");
        console.log("1. Tambah Transaksi Rental (Create)");
        console.log("2. Lihat Daftar Transaksi (Read)");
        console.log("3. Ubah Data Transaksi (Update)");
        console.log("4. Hapus Data Transaksi (Delete)");
        console.log("5. Cari Transaksi (Search)");
        console.log("6. Keluar (Exit)");
        console.log("==========================================");

        const choice: string = await askQuestion("Pilih menu (1-6): ");

        // Percabangan switch untuk mengarahkan pilihan menu
        switch (choice.trim()) {
            case "1":
                createTransaction();
                break;
            case "2":
                readTransactions();
                break;
            case "3":
                updateTransaction();
                break;
            case "4":
                deleteTransaction();
                break;
            case "5":
                searchTransactions();
                break;
            case "6":
                console.log("\nTerima kasih telah menggunakan sistem ini. Program ditutup.");
                isRunning = false;
                break;
            default:
                console.log("\n[ERROR] Input tidak valid! Harap masukkan angka antara 1 sampai 6.");
                break;
        }
    }

    rl.close();
}

// Menjalankan aplikasi
mainMenu();