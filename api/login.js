let codes = ["ABC123","DEF456","GHI789"]; // جایگزین با کدهای خودت یا از GitHub بخوان

export default function handler(req,res){
  if(req.method!=='POST'){return res.status(405).json({ok:false});}
  const {code} = req.body;
  if(codes.includes(code)){
    codes = codes.filter(c => c !== code);
    return res.status(200).json({ok:true});
  } else return res.status(200).json({ok:false});
}
