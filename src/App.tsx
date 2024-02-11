import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import './App.css';

interface Phone {
  title: string;
  description: string;
  thumbnail: string;
}

function App() {
  const [userData, setUserData] = useState<Phone>();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://dummyjson.com/products');
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const data = await response.json();
      console.log(data);
      setUserData(data.products[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading &&

        <Card>
          <CardHeader>
            <CardTitle className='flex justify-center'>
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </CardTitle>
          </CardHeader>
          <CardContent className='flex justify-center'>
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          </CardContent>
          <CardContent className='flex justify-center'>
            <Skeleton className="w-[500px] h-[264px]" />
          </CardContent>
        </Card>
      }

      {/* Display the fetched user data */}
      {!loading && userData && (
        <div>
          {/* {JSON.stringify(userData)} */}
          <Card>
            <CardHeader>
              <CardTitle>{userData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{userData.description}</p>
            </CardContent>
            <CardContent className='flex justify-center'>
              <img src={userData.thumbnail} />
            </CardContent>
          </Card>

        </div>
      )}
    </>
  );
}

export default App;
