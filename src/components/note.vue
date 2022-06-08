<div class="card-body w-100 d-flex flex-wrap justify-content-center p-0">
    <div v-for="(st,index) in product.stock" :key="index">
        <button class="btn m-2 btn-outline-primary" data-toggle="modal" data-target="#exampleModalCenter1" @click="expand(st.id)"   >
            {{st.size}}
        </button>
        <div  v-if="expanded == st.id" class="modal fade"  id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog " role="document">
                <div class="modal-content">
                    <div class="modal-header d-flex pb-0 flex-wrap">
                        <div class="pb-0">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h6 class="card-text pb-0"> ( {{st.price}} )</h6>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" :class="[stt.id != st.id ? 'd-none' : '', '']" v-for="(stt,index) in product.stock" :key="index">
                        <img :src="`http://localhost:8000/`+stt.p_image" class="d-block w-100" >
                        <div v-html="product.description" class="mt-4 px-3">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
