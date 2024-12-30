class Project{
    title: string;
    s_desc: string;
    l_desc: string;
    img?: string;
    link?: string;

    constructor(title:string, s_desc:string, l_desc:string, img?:string, link?:string){
        this.title=title;
        this.s_desc=s_desc;
        this.l_desc=l_desc;
        if(img!==undefined){
            this.img=img;
        }
        if(link!== undefined){
            this.link=link;
        }
    }
};

export default Project