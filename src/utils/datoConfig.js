import { SiteClient } from 'datocms-client';

const client = new SiteClient("01f5bbccfa996b11771a164d9c1f91");

async function createUpload(file, title) {
    const path = await client.createUploadPath(file, {
        filename: title,
    });
    const upload = await client.uploads.create({ path });

    return upload;
}

async function createCommunity(title, description, image, owner) {
    createUpload(image, title)
        .then(async (upload) => {
            await client.items.create({
                itemType: "971843",
                title: title,
                description: description,
                coverImage: {
                    upload_id: upload.id
                }, 
                owner: owner
            });
        });
}

async function getRecords() {
    const records = await client.items.all();
    return records
}

async function findImage(record) {
    const img = await client.uploads.find(record);
    return img.url;
}

export {createCommunity, getRecords, findImage};