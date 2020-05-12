//let cFactor;

class cFactor {
  constructor(
    cFactorLabel,
    num,
    numExp,
    numUnit,
    numComp,
    denom,
    denomExp,
    denomUnit,
    denomComp
  ) {
    this.cFactorLabel = cFactorLabel;
    this.num = num;
    this.numExp = numExp;
    this.numUnit = numUnit;
    this.numComp = numComp;
    this.denom = denom;
    this.denomExp = denomExp;
    this.denomUnit = denomUnit;
    this.denomComp = denomComp;
  }
}

gramsNitrogenPerMol = new cFactor(
  "Nitrogen grams per mol",
  14.0067,
  1,
  "grams",
  "Nitrogen",
  1,
  undefined,
  "mol",
  "nitrogen"
);

atomsPerMol = new cFactor(
  "Atoms per mol",
  6.023,
  23,
  "atoms",
  undefined,
  1,
  "mol",
  undefined
);

let numeratorProduct =
  atomsPerMol.num *
  Math.pow(10, atomsPerMol.numExp) *
  (gramsNitrogenPerMol.num * Math.pow(10, gramsNitrogenPerMol.numExp));
console.log(parseInt(numeratorProduct));
