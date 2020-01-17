import {subDays,isBefore} from 'date-fns';
import * as Yup from 'yup';
class CheckIn(){
  async index(req,res){
    const {page = 1,quantity = 20,id} = req.params;
    const CheckIns = await CheckIn
  }
  async store(req,res){

  }

  async update(req,res){

  }
}

export default new CheckIn();