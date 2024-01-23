# Imprimir Repositórios

Esse projeto é um programa Node que imprime os nomes e repositórios git, de todos os alunos que colaboraram com o estudo.

Cada aluno deve fazer um fork desse repositório, depois criar um novo arquivo na pasta data do projeto. O arquivo deve ter o nome do aluno e deve ser um arquivo JSON. O conteúdo do arquivo deve seguir o exemplo do arquivo marceltanuri.json já existente, substitua os valores pelo seu nome e usuario github

Depois de fazer as alterações o aluno deve enviar um Pull Request (PR) para o dono do repositório, no caso é o professor Marcel Tanuri. O dono do repositório irá avaliar cada PR e se estiver tudo Ok irá fazer um merge das alterações.
Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ ^[[200~cd Documentos
bash: $'\E[200~cd': command not found

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ ^[[200~git clone https://github.com/teofilonicolau/imprime-repositorios.git
bash: $'\E[200~git': command not found

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ ~ git init
bash: /c/Users/Samsung: Is a directory

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git clone https://github.com/teofilonicolau/imprime-repositorios.git
Cloning into 'imprime-repositorios'...
remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (12/12), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 12 (delta 3), reused 5 (delta 0), pack-reused 0
Receiving objects: 100% (12/12), 4.04 KiB | 275.00 KiB/s, done.
Resolving deltas: 100% (3/3), done.

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ cd imprime-repositorios/data
^C

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ echo '{ "nome": "Teofilo Nicolau", "githubUser": "https://github.com/teofilonicolau" }' > teofilonicolau.json

git add teofilonicolau.json
fatal: Unable to create 'C:/Users/Samsung/.git/index.lock': File exists.

Another git process seems to be running in this repository, e.g.
an editor opened by 'git commit'. Please make sure all processes
are terminated then try again. If it still fails, a git process
may have crashed in this repository earlier:
remove the file manually to continue.

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ ^C

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ rm -f C:/Users/Samsung/.git/index.lock

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git add teofilonicolau.json

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git commit -m "Adicionando arquivo JSON com minhas informações"
[main (root-commit) f2a43b2] Adicionando arquivo JSON com minhas informações
 1 file changed, 1 insertion(+)
 create mode 100644 teofilonicolau.json

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git push origin main
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git remote -v

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git remote add origin https://github.com/teofilonicolau/imprime-repositorios.git

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git push origin main
To https://github.com/teofilonicolau/imprime-repositorios.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/teofilonicolau/imprime-repositorios.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git pull origin main
remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (12/12), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 12 (delta 3), reused 5 (delta 0), pack-reused 0
Unpacking objects: 100% (12/12), 4.02 KiB | 39.00 KiB/s, done.
From https://github.com/teofilonicolau/imprime-repositorios
 * branch            main       -> FETCH_HEAD
 * [new branch]      main       -> origin/main
fatal: refusing to merge unrelated histories

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git push origin main
To https://github.com/teofilonicolau/imprime-repositorios.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/teofilonicolau/imprime-repositorios.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git checkout main
Already on 'main'

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git pull origin main
From https://github.com/teofilonicolau/imprime-repositorios
 * branch            main       -> FETCH_HEAD
fatal: refusing to merge unrelated histories

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$ git push origin main --force
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 2 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 327 bytes | 109.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/teofilonicolau/imprime-repositorios.git
 + f5aa9e1...f2a43b2 main -> main (forced update)

Samsung@DESKTOP-5FG2493 MINGW64 ~ (main)
$
