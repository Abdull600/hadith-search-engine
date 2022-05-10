import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRef, useState } from 'react';
import Ahadith from '../components/ahadith';

export default function Home() {
  const inputRef = useRef();

  const [hadithData, setHadithData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const keyWord = inputRef.current.value;
    if(!keyWord) return;

    setHadithData(keyWord);
    e.target.reset();
  }
 
  return (
    <div>
      <form onSubmit={submitHandler}>
            <div className="control">
                <input 
                type="text"
                ref={inputRef}
                placeholder="نص الحديث"
                lang='ar'
                />
            </div>

            <div className="actions">
                <button type="submit">ابحث</button>
            </div>
        </form>

        <Ahadith hadithData={hadithData} />
    </div>
  )
}
