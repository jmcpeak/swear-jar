import * as React from 'react';
import { ScrollView } from 'react-native';
import CustomCard from '../Components/Card';
import SearchBar from '../Components/SearchBar';
import elements from '../CustomProperties/elements';

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
