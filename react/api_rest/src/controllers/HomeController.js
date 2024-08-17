import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Ale',
      sobrenome: 'Dias',
      email: 'ale@window.com',
      idade: 30,
      peso: 60,
      altura: 2.0,
    });
    res.json(novoAluno);
  }

}

export default new HomeController();