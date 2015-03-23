<?php

/**
 * This is the model class for table "objekat_has_kategorija".
 *
 * The followings are the available columns in table 'objekat_has_kategorija':
 * @property integer $Objekat_idObjekat
 * @property integer $Kategorija_idKategorija
 */
class ObjekatHasKategorija extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'objekat_has_kategorija';
	}

	public function primaryKey()
	{
   		return 'columnName';
	}
	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('Objekat_idObjekat, Kategorija_idKategorija', 'required'),
			array('Objekat_idObjekat, Kategorija_idKategorija', 'numerical', 'integerOnly'=>true),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('Objekat_idObjekat, Kategorija_idKategorija', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'Objekat_idObjekat' => 'Objekat Id Objekat',
			'Kategorija_idKategorija' => 'Kategorija Id Kategorija',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('Objekat_idObjekat',$this->Objekat_idObjekat);
		$criteria->compare('Kategorija_idKategorija',$this->Kategorija_idKategorija);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return ObjekatHasKategorija the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
