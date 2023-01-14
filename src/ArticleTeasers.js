import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArticleTeasers() {

  const [randomArticleTeaser, setRandomArticleTeaser] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  
  useEffect(() => {
    const min = 0, max = 20, count = 1;
    const URL = `http://www.randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=${count}`;
    const fetchRandomData = async () => {
      try {
        const {data: response} = await axios.get(URL);
        setRandomArticleTeaser(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    const fetchRandomImages = async () => {
      try {
        const {data: response} = await axios.get(`https://dog.ceo/api/breeds/image/random`);
        setRandomImages(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchRandomData();
    fetchRandomImages();
  }, []);

    return (
        <div className='ab-testing'>
            <h1>Article teasers</h1>
            <ul className='article-teasers-list'>
            {
                    [...Array(randomArticleTeaser[0])]
                    .map((e, i) => {
                        return <li className='article-teaser' key={i}>
                                    <img src={randomImages.message} alt="random"></img>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ArticleTeasers;