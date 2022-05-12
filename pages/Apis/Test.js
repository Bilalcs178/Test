import axios from "axios";

class GetData {
constructor(){
this.result=[];
}

TestApi = () => {
    const res = async () => {
      const resp = await axios
        .get("https://randomuser.me/api/ ")
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };

 

  
}
export default new GetData();