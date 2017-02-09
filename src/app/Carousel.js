import React, {Component} from 'react'

const catImages = [
    "http://i.imgur.com/EKEIGnI.jpg",
    "hhttp://i.imgur.com/5i866n2b.jpg",
    "http://i.imgur.com/FmbuPNeb.jpg",
    "http://i.imgur.com/vRKI7wIb.jpg"
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