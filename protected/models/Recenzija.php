<?php

/**
 * This is the model class for table "recenzije".
 *
 * The followings are the available columns in table 'recenzije':
 * @property integer $idRecenzija
 * @property string $datumObjave
 * @property string $Opis
 * @property integer $Objekat_idObjekat
 * @property string $Korisnici_idKorisnik
 *
 * The followings are the available model relations:
 * @property Komentari[] $komentaris
 * @property Objekti $objekatIdObjekat
 * @property Korisnici $korisniciIdKorisnik
 */
class Recenzija extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'recenzije';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('datumObjave, Opis, Objekat_idObjekat, Korisnici_idKorisnik', 'required'),
			array('Objekat_idObjekat', 'numerical', 'integerOnly'=>true),
			array('Korisnici_idKorisnik', 'length', 'max'=>128),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idRecenzija, datumObjave, Opis, Objekat_idObjekat, Korisnici_idKorisnik', 'safe', 'on'=>'search'),
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
			'komentaris' => array(self::HAS_MANY, 'Komentari', 'Recenzija_idRecenzija'),
			'objekatIdObjekat' => array(self::BELONGS_TO, 'Objekti', 'Objekat_idObjekat'),
			'korisniciIdKorisnik' => array(self::BELONGS_TO, 'Korisnici', 'Korisnici_idKorisnik'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idRecenzija' => 'Id Recenzija',
			'datumObjave' => 'Datum Objave',
			'Opis' => 'Opis',
			'Objekat_idObjekat' => 'Objekat Id Objekat',
			'Korisnici_idKorisnik' => 'Korisnici Id Korisnik',
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

		$criteria->compare('idRecenzija',$this->idRecenzija);
		$criteria->compare('datumObjave',$this->datumObjave,true);
		$criteria->compare('Opis',$this->Opis,true);
		$criteria->compare('Objekat_idObjekat',$this->Objekat_idObjekat);
		$criteria->compare('Korisnici_idKorisnik',$this->Korisnici_idKorisnik,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Recenzija the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
