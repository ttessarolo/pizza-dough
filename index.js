const r = {
  panetti: 2,
  pesoPanetto: 230,
  idratazione: 60,
  integrale: 45,
  manitoba: 55,
  sale: 1,
  olio: 1.2,
  malto: 0,
  lievito: 0.163,
  tipoLievito: "secco",
};

const convertiLievito = (start, type) => {
  if (type === "fresco") return start * 3;
  if (type === "madre") return start * 36;
  return start;
};

const toP = (n) => parseFloat(n) / 100;
const toF = (n) => Number(n.toFixed(2));

const totaleImpasto = r.panetti * r.pesoPanetto;
r.idratazione = toP(r.idratazione);

r.integrale = toP(r.integrale);
r.manitoba = toP(r.manitoba);
r.sale = toP(r.sale);
r.olio = toP(r.olio);
r.malto = toP(r.malto);
r.lievito = toP(convertiLievito(r.lievito, r.tipoLievito));

for (let k = 0; ; k++) {
  const sale = Math.round(k * r.sale);
  const olio = Math.round(k * r.olio);
  const malto = Math.round(k * r.malto);
  const lievito = toF(k * r.lievito);
  const integrale = Math.round(k * r.integrale);
  const manitoba = Math.round(k * r.manitoba);

  const solido = Math.round(integrale + manitoba + sale + lievito + malto);
  const acqua = Math.round(solido * r.idratazione);
  const liquido = Math.round(olio + acqua);
  const totale = Math.round(solido + lievito + liquido);
  const idratazione = Math.floor((liquido / (solido + lievito)) * 100);

  if (totale >= totaleImpasto) {
    console.log({
      acqua,
      manitoba,
      integrale,
      sale,
      olio,
      malto,
      tipoLievito: r.tipoLievito,
      lievito,
      totale,
      idratazione,
      panetto: Math.round(totale / r.panetti),
    });
    break;
  }
}
