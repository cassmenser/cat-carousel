import React, {Component} from 'react'

const catImages = [
    "http://i.imgur.com/QguNZ3a.jpg",
    "http://i.imgur.com/sPANQNZ.jpg",
    "http://i.imgur.com/yiNa01J.jpg",
    "http://i.imgur.com/pzfHxc4.jpg",
    "http://i.imgur.com/tgrMluL.jpg",
    "http://i.imgur.com/oDlmNJh.jpg",
    "http://i.imgur.com/2t6zqoy.jpg?1"
];

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: catImages,
            selectedImage: catImages[0]
        }
    }

    handleThumbClick(selectedImage) {
        this.setState({
            selectedImage
        })
    }

    render() {
        const {images, selectedImage} = this.state;
        return (
            <div className="image-gallery">
                <div className="gallery-image">
                    <div>
                        <img src={selectedImage} />
                    </div>
                </div>
                <div className="image-scroller">
                    {images.map((image, index) => (
                        <div key={index} onClick={this.handleThumbClick.bind(this,image)}>
                            <img src={image}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}