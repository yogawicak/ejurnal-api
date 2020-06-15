#users schema
{
    _id: '',
    username: '',
    password: '',
    fullname: '',
    company: '',
    created_at: '',
    updated_at: '',
    roles: '', /** #Siswa, PengawasIndustri, GuruPembimbing */
    company:[{#company schema}]
}

#company schema
{
    _id:'',
    company_name:'',
    company_address:'',
    created_at:'',
    updated_at:'',
}

#jurnal schema
{
    _id:'',
    judul:'',
    detail:'',
    img_path:'',
    created_at:'',
    updated_at:'',
    created_by:[        #referenced relationshiip
        users
    ]
}

#request approval schema
{
    _id:'',
    jurnal:[{
        judul:'',
        detail:'',
        img_path:'',
        created_at:'',
        updated_at:'',
    }],
    request_by:[users],
    request_to:[users],
}

#approval
{
    _id:'',
    jurnal:[{'#jurnal schema'}],
    approved_by:[users], ## guru / pengawas industri
}