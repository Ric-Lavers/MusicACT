import { Timeline } from 'react-twitter-widgets';

ReactDOM.render((
    <Timeline
        dataSource={{
            sourceType: 'profile',
            screenName: 'twitterdev'
        }}
        options={{
            username: 'TwitterDev',
            height: '400'
        }}
        onLoad={() => console.log('Timeline is loaded!')}
    />
), document.getElementById('root'))