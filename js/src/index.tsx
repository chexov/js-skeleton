import * as React from "react";
import {AppBar} from "react-toolbox/lib/app_bar";
import {Input} from "react-toolbox/lib/input";
import {Button} from "react-toolbox/lib/button";
import ProgressBar from 'react-toolbox/lib/progress_bar';

import {Card, CardActions, CardMedia, CardText, CardTitle} from 'react-toolbox/lib/card';

import * as ReactDOM from "react-dom";


class Media {
}

class MediaItemState {
}

class MediaItemProps {
    key: string;
    media: Media;
}

class MediaItem extends React.Component<MediaItemProps, MediaItemState> {
    render() {
        return (
            <Card style={{width: '350px', margin: '5px', float: 'left'}}>
                <CardMedia
                    aspectRatio="wide"
                    image="https://placeimg.com/800/450/nature"
                />
                <CardTitle title="85966e91-53f0-4710-b4a3-a4a7e17d15fd/video.mp4" subtitle="Added 2 mins ago">

                </CardTitle>

                <ProgressBar mode='determinate' value={42}/>
            </Card>
        )
    }
}

class SubmitAppProps {
    url: string;
}

class SubmitAppState {
    url: string;
}

class SubmitApp extends React.Component<SubmitAppProps, SubmitAppState> {
    state = {
        url: this.props.url || ""
    };

    options = {
        'clientId': '5r24jw3wvgzz0wk1mzo7htrbefs6ejmg',
        'linkType': 'direct',
        'multiselect': true,
    };

    validate() {
        console.log("click");
        // let promise = rxRequest({
        //     method: 'post',
        //     url: '/api/1/validate',
        //     data: {url: "UUUR"}
        // }).subscribe(result => console.log(result.body.ip), console.error);
    }

    onChange(v: string) {
        this.setState({url: v});
    }

    render() {
        return (
            <div>
                <AppBar title="VG"/>

                <Card raised={true} style={{width: '640px', marginBottom: '15px', marginTop: '15px'}}>
                    <CardTitle title="Add new media"/>
                    {/*<CardMedia*/}
                    {/*aspectRatio="wide"*/}
                    {/*image="https://placeimg.com/800/450/nature"*/}
                    {/*/>*/}
                    <CardText>
                        <Input
                            label="Direct video or image URL"
                            type="url"
                            name="url"
                            value={this.state.url}
                            onChange={(v: string) => this.onChange(v)}
                        />
                    </CardText>
                    <CardActions>
                        <Button icon='colorize' label='Validate' flat primary onClick={this.validate}/>
                    </CardActions>
                </Card>

                <div/>

                <MediaItem key="m1" media={m1}/>
                <MediaItem key="m2" media={m1}/>
                <MediaItem key="m3" media={m1}/>
                <MediaItem key="m4" media={m1}/>
                <MediaItem key="m5" media={m1}/>
                <MediaItem key="m6" media={m1}/>
                <MediaItem key="m7" media={m1}/>


            </div>
        )
    }
}

const m1 = {
    id: "m1",
    title: "85966e91-53f0-4710-b4a3-a4a7e17d15fd",
    image: "https://placeimg.com/800/450/nature"
};


console.log("Booting...");
let ga = document.getElementById("ga");
ReactDOM.render(React.createElement(SubmitApp, new SubmitAppProps()), ga);
