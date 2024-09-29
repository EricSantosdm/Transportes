function generatePDF() {
    var doc = new jsPDF();

    // Coleta os dados do formulário
    const nome = document.getElementById("nome").value;
    const matricula = document.getElementById("matricula").value;
    const lotacao = document.getElementById("lotacao").value;
    const cargo = document.getElementById("cargo").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const destino = document.getElementById("destino").value;
    const roteiro = document.getElementById("roteiro").value;
    const solicitacao = document.getElementById("solicitacao").value;

    // Cria o conteúdo do PDF
    doc.text("Formulário de Viagem", 10, 10);
    doc.text(`Nome: ${nome}`, 10, 20);
    doc.text(`Matrícula Siape: ${matricula}`, 10, 30);
    doc.text(`Lotação/Órgão: ${lotacao}`, 10, 40);
    doc.text(`Cargo: ${cargo}`, 10, 50);
    doc.text(`Telefone: ${telefone}`, 10, 60);
    doc.text(`E-mail: ${email}`, 10, 70);
    doc.text(`Destino: ${destino}`, 10, 80);
    doc.text(`Roteiro: ${roteiro}`, 10, 90);
    doc.text(`Solicitação de serviço: ${solicitacao}`, 10, 100);

    // Gera o PDF
    doc.save('formulario_viagem.pdf');
}
