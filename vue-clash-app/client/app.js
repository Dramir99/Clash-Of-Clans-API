const clans = new Vue({
    el: '#clans',
    data: {
        appName: 'Clash of Clans App',
        clanName: '',
        clanList: {},
        clan: {},
        showsearchbar: true,
        showList: true,
        imgUrl: ""
    },
    computed: {
        // compute the total number of clans in the list
        total: function(){
            if(this.clanList){
                return this.clanList.length;

            }
            else{
                return 0;
            }
        }
    },
    methods: {
        findClan: async function(){
            // make a POST http request to our server for the clan search
            const response = await axios.post('http://localhost:8888/api/search', {
                clanName: this.clanName,
                
            });

            this.clanList = response.data;
            // if the there is data in the list then make the search bar disappear
            if(this.clanList.length){
                this.showsearchbar = false;
            }
        },
        findclanID: async function(clanID){
            
            clanID = clanID.slice(1);

            // make a POST http request to our server to find a clan by ID
            const response = await axios.post('http://localhost:8888/api/searchID', {
                clanID: clanID,
                
            });

            this.clan = response.data;
            // set the image data 
            this.imgUrl = this.clan.badgeUrls.large;
            // make the list disappear
            this.showList = false;
            
        },
        reSearch: function(){
            // reset the data in memory to search again
            this.clanName= '';
            this.clanList= {};
            this.clan= {};
            this.showsearchbar= true;
            this.showList= true;
            this.imgUrl= "";
        }
    }
})