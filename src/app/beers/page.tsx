"use client"
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { useRouter } from 'next/navigation';
import BeerCard from '../components/BeerCard';
import { useEffect, useState, useRef } from 'react';
import { getData } from '@/store/features/beersSlice';

export default function Home() {
  const signIn = useAppSelector(state => state.user.isSign);
  const beers = useAppSelector(state => state.beers.data);
  const [nextPage, setNextPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const scrollContainerRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    const options = { page: 1, per_page: 10 }
    if (!signIn) {
      router.push("/signin")
    }
  }, [])
  useEffect(() => {
    loadMoreData();
  }, []); // Load initial data


  const loadMoreData = () => {
    if (isLoading) return; // Avoid multiple simultaneous requests
    setIsLoading(true);
    setNextPage(nextPage + 1)
    const options = { page: nextPage, per_page: 10 };
    dispatch(getData(options))
      .unwrap() // Assuming your action uses createAsyncThunk
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleScroll = () => {
    const scrollContainer = document.documentElement;

    const threshold = 100; // Adjust this threshold according to your needs
    const isNearBottom =
      scrollContainer.scrollHeight - scrollContainer.scrollTop <=
      scrollContainer.clientHeight + threshold;

    if (isNearBottom && !isLoading) {
      loadMoreData();
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return (
    <main className=" ">
      <div>

      </div>
      <div className=' mt-5  flex  flex-row flex-wrap gap-5 justify-center'      >
        {
          beers.map((beer: any, key: number) =>
            <BeerCard key={key} className={"  h-min  sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"} beer={beer} />)
        }
      </div>
    </main>
  )
}
