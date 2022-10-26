import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Cateorey = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>Categorey :{categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCard
                key={news.id}
                news={news}
                >


                </NewsSummaryCard>)
            }
        </div>
    );
};

export default Cateorey;