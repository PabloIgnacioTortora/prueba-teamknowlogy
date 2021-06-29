const ADN = require("../models/adn");

// Verificar si existe dna en la base de datos
const checkAdnExisted = async (req, res, next) => {
  try {
    const adn = await ADN.findOne({ ADNSecuence: req.body.ADNSecuence });
    if (adn) return res.status(400).json({ message: "The ADN already exists" });
    return;
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// Verificar si hay mutacion
const hasMutation = (req, res, next) => {
  const { ADNSecuence } = req.body;
  console.log(ADNSecuence);
  let repeat = [];
  let count_a = 0;
  let count_c = 0;
  let count_g = 0;
  let count_t = 0;
  let letras = ["a", "c", "g", "t"];

  // Repetidos en fila
  const repeatInRow = (adn) => {
    adn.map((item) => {
      let newItem = item.split("");
      for (let i = 0; i < newItem.length; i++) {
        for (let j = 0; j < letras.length; j++) {
          if (newItem[i].toLowerCase() === letras[j]) {
            if (letras[j] === "a") {
              count_a++;
            }
            if (letras[j] === "c") {
              count_c++;
            }
            if (letras[j] === "g") {
              count_g++;
            }
            if (letras[j] === "t") {
              count_t++;
            }
          }
        }
      }
      repeat.push(count_a);
      repeat.push(count_c);
      repeat.push(count_g);
      repeat.push(count_t);
      count_a = 0;
      count_c = 0;
      count_g = 0;
      count_t = 0;
    });
    if (Math.max(...repeat) >= 4) return true;
    return false;
  };

  // Repetidos en columna
  const repeatInColumn = () => {
    let columns = [];
    let transpose = () => {
      return Object.keys(ADNSecuence[0]).map((c) => {
        return ADNSecuence.map((r) => {
          return r;
        });
      });
    };
    columns = transpose()[0];
    if (repeatInRow(columns)) return true;
    return false;
  };

  // Repetidos en diagonal
  const repeatInDiagonal = () => {
    let arrOfArr = [];
    let resultArray = [];
    let rows = ADNSecuence.length;
    let resultArrayReverse = [];

    ADNSecuence.map((item) => {
      arrOfArr.push(item.split(" "));
    });

    let columns = arrOfArr[0].length;

    for (let i = 0; i < rows; i++) {
      let index = 0;
      let k = 0;
      resultArray[index] = new Array();
      for (let j = i; j >= 0; j--) {
        resultArray[index].push(arrOfArr[j][k]);
        k++;
        if (k === columns) {
          break;
        }
      }
      resultArray[index] = resultArray[index].join();
      index++;
    }
    let arrOfArrReverse = arrOfArr.reverse();
    for (let i = 0; i < rows; i++) {
      let index1 = 0;
      let k = 0;
      resultArrayReverse[index1] = new Array();
      for (let j = i; j >= 0; j--) {
        resultArrayReverse[index1].push(arrOfArrReverse[j][k]);
        k++;
        if (k === columns) {
          break;
        }
      }
      resultArrayReverse[index1] = resultArrayReverse[index1].join();
      index1++;
    }
    let diagonals = resultArray.concat(resultArrayReverse);
    console.log(diagonals);
    if (repeatInRow(diagonals)) return true;
    return false;
  };
  if (repeatInRow(ADNSecuence) || repeatInDiagonal() || repeatInColumn())
    return res.status(200).send({ true: true });
  return res.status(403).send({ false: false });
};

// Guardar en mongodb el dna unico
const saveAdn = async (req, res) => {
  try {
    const { ADNSecuence } = req.body;
    const adn = new ADN({
      ADNSecuence,
    });
    // saving the new adn
    const savedAdn = await adn.save();
    return res.status(200).json({
      ADNSecuence: savedAdn,
    });
  } catch (error) {
    console.error(error);
  }
};

// Devolver los dna
const getAdns = async (req, res) => {
  try {
    ADN.find({}).exec((err, ADNSecuence) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error al devolver los datos." });
      if (!ADNSecuence)
        return res.status(404).send({ message: "No hay adn's para mostrar." });
      return res.status(200).send({ ADNSecuence });
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { saveAdn, checkAdnExisted, hasMutation };
