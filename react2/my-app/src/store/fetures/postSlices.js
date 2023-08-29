import { createSlice } from "@reduxjs/toolkit";

export const submitSlice = createSlice({
  name: "nameData",
  initialState: {
    nameItem: [],
    oldNameItem: {
      fName: "",
      lName: "",
      sName: "",
      genderName: "",
      city: "",
      hobbyName: [],
      uniqeKey: Number(),
      toDayDate: "",
    },
    isEdit: true,
  },

  reducers: {
    addData: (state, action) => {
      state.nameItem.push({
        ...action.payload,
        uniqeKey: new Date().getTime(),
      });
      console.log(action.payload);
    },
    deleteData: (state, action) => {
      console.log("//////////////////////////pppppppppppppp",state);
    },
    editData: (state, action) => {
      state.nameItem.map((val) => {
        if (val.uniqeKey === state.oldNameItem.uniqeKey) {
          val.getData.fName = action.payload.getData.fName;
          val.getData.lName = action.payload.getData.lName;
          val.getData.sName = action.payload.getData.sName;
          val.getData.genderName =
            action.payload.getData.genderName;
          val.getData.city = action.payload.getData.city;
          val.getData.hobbyName = [...action.payload.getData.hobbyName];
          val.getData.toDayDate = action.payload.getData.toDayDate
        }
        state.isEdit=false;
      });
      
    },
    getData: (state, action) => {
      state.oldNameItem.fName = action.payload.getData.fName;
      state.oldNameItem.lName = action.payload.getData.lName;
      state.oldNameItem.sName = action.payload.getData.sName;
      state.oldNameItem.genderName = action.payload.getData.genderName;
      state.oldNameItem.city = action.payload.getData.city;
      state.oldNameItem.hobbyName = [...action.payload.getData.hobbyName];
      state.oldNameItem.toDayDate = action.payload.getData.toDayDate;
      state.oldNameItem.uniqeKey = action.payload.uniqeKey;
      state.isEdit=true;
    },
  },
});

export const { addData, deleteData, getData, editData } = submitSlice.actions;
export default submitSlice.reducer;
