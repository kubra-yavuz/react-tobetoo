import Posts from "./pages/Posts/Posts";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import { Post } from "./models/post";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useEffect, useState } from "react";
import postService from "./services/postService";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  // Backend bağlantısı - http isteği
  // bağlantı sonucu gelen değeri ekranda göstermek
  // componentler arası veri iletişimi
  const [posts, setPosts] = useState<Post[]>([]);
  // useState hook'u ile 'posts' adında bir state ve bu state'i güncellemek için 'setPosts' adında bir fonksiyon tanımlanır.

  useEffect(() => { //useEffect hook'u, bileşenin yüklendiği anda bir işlem gerçekleştirmek için kullanılır.
    fetchItems(); //fetchItems fonksiyonu çağrılır. Bu, sayfa ilk yüklendiğinde PostService.getAll fonksiyonunu çağırarak verileri çeker ve setPosts fonksiyonu aracılığıyla 'posts' state'ini günceller.
  }, [])

  const fetchItems = async () => {
    //axios.get ("https://jsonplaceholder.typicode.com/posts")
    //.then((response)=>{console.log(response)})
    //.catch((error)=>{console.log(error)})
    //.finally(()=>{console.log("async işlem bitti")});

    try {


      let response = await postService.getAll(); //PostService.getAll fonksiyonu çağrılarak veriler çekilir.
      setPosts(response.data); //Başarılı bir şekilde çekilen veriler, setPosts fonksiyonu aracılığıyla 'posts' state'ine eklenir.
    } catch (e) {
      console.log(e); //Hata durumunda ise hata konsola yazdırılır.
    }
  };
  const removePost = (id: any) => { //removePost fonksiyonu, bir post'un ID'sine göre filtreleme yaparak 'posts' state'ini günceller ve ilgili post'u kaldırır.
    setPosts(posts.filter((i: any) => i.id !== id));
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} /> {/*sayfa ilk açıldığında*/}
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} /> {/*NotFound sayfası*/}
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
