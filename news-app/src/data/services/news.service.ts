import React, { useEffect, useState } from 'react';
import { IError } from '../interfaces/fetch.interface';
import { BASE_API_PATH } from 'data/constants';
import { IArticle } from 'data/interfaces/news.interface';

const useFetchNews = (): [IArticle[], boolean, IError] => {
    
const [data, setData] = useState<IArticle[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(true);
const [hasError, setHasError] = useState<IError>({
    error: false,
    message: ''
});

// Base URL
const url = `${BASE_API_PATH}v1/news?q=`;

useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
            // Parse to use dot notation
            const arrayData = JSON.parse(JSON.stringify(result));
            // Add a Timout to simulate fetch duration - Only for Exercise purpose :)
            setTimeout(()=> {
                setIsLoading(false);
                // Arrage Array to return items by publishedAt Desc
                setData(arrayData.articles?.sort(
                    (a: IArticle, b: IArticle) => {
                        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
                    }
                ));
            }, 1000)
        },
        (error) => {
            setIsLoading(false);
            setHasError({
                error: true, 
                message: `An Error has occured, please try again later ${error}`
            });
        }
      )
  }, [])
 
return [ data, isLoading, hasError];

}

export default useFetchNews;
