ssh-keygen -t rsa -b 4096 -C "jokoutomo190.ju@gmail.com"

ssh -i "zila.pem" ubuntu@ec2-3-0-16-46.ap-southeast-1.compute.amazonaws.com (yes)

$path = ".\zila.pem"

# Reset to remove explicit permissions

icacls.exe $path /reset

# Give current user explicit read-permission

icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"

# Disable inheritance and remove inherited permissions

icacls.exe $path /inheritance:r

source ~/.bashrc
nvm install v21.7.1

(test koneksi)ssh -i "C:\Users\Joko Prasetyo Utomo\documents\vscode\awsNew\zila.pem" ubuntu@ec2-3-0-16-46.ap-southeast-1.compute.amazonaws.com

cara konek stfp ppk. install sftp extensi vscode
Langkah 1: Buka Folder atau File Remote
Buka Command Palette di VS Code:

Gunakan shortcut Ctrl+Shift+P (Windows/Linux) atau Cmd+Shift+P (Mac) untuk membuka Command Palette.
Cari Perintah SFTP:

Di dalam Command Palette, ketik SFTP: Sync Local/Remote atau SFTP: Open Remote.
Pilih SFTP: Open Remote.
Pilih Folder yang Tersedia di Remote:

Setelah Anda memilih perintah SFTP: Open Remote, VS Code akan menghubungkan ke server remote Anda menggunakan pengaturan di file sftp.json.
Anda akan diminta untuk memilih folder remotePath yang telah Anda tentukan di file sftp.json.

setelah itu connect ke terminal secara manual untuk cli=
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
ubuntu@ip-172-31-31-93:~$ echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
ubuntu@ip-172-31-31-93:~$ echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
ubuntu@ip-172-31-31-93:~$ source ~/.bashrc
ubuntu@ip-172-31-31-93:~$ nvm install v21.7.1

cd Pem
npm run start:prod
http://47.129.240.41:5000/notes
pm2 start npm --name "notes-api" -- run "start:prod" //agar server node tetap berjalan
