import * as React from 'react';
import { ScrollView } from 'react-native';
import CustomCard from '../components/Card';
import SearchBar from '../components/SearchBar';
import elements from '../customProperties/elements';

const MusicRoute = () => {
  return (
    <>
      <SearchBar />
      <ScrollView>
        {elements.map((ele) => (
          <CustomCard
            key={ele.id}
            comment={ele.comment}
            content={ele.content}
            likes={ele.likes}
            shares={ele.shares}
            title={ele.title}
            uri={ele.uri}
            views={ele.views}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default MusicRoute;
