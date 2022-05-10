import useSWR, { useSWRConfig } from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Ahadith({ hadithData }) {
    const { cache } = useSWRConfig();
    const { data } = useSWR(`https://dorar-hadith-api.herokuapp.com/api/search?value=${hadithData}&page=${15}`, fetcher);
    console.table(data);
    return (
        <div>
            <h3 className="result">  نتائج البحث </h3>
            <div  className="data-container">
                {data?.map(hadis => (
                    <div key={hadis.index} className="data">
                        <h4>نص الحديث</h4>
                        <p>{ hadis.hadith}</p>
                        <ul>
                            <li> <span>  حكم:</span> {hadis.grade}</li>
                            <li> <span>المصدر : </span> {hadis.source} </li>
                            <li> <span>المحدث :</span> {hadis.el_mohdith}  </li>
                            <li> <span>الراوي  :</span> {hadis.el_rawi} </li>
                        </ul>
                    </div>
                )) || <h3>لا توجد نتائج</h3> }  
            </div>
        </div>
    )
}