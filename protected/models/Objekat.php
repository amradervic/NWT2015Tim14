<?php

/**
 * This is the model class for table "objekti".
 *
 * The followings are the available columns in table 'objekti':
 * @property integer $idObjekat
 * @property string $naziv
 * @property string $adresa
 * @property string $grad
 * @property string $tip
 * @property string $opis
 *
 * The followings are the available model relations:
 * @property Kategorije[] $kategorijes
 * @property Ocjene[] $ocjenes
 * @property Recenzije[] $recenzijes
 */
class Objekat extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'objekti';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('naziv, adresa, grad, tip', 'required'),
			array('naziv, adresa, grad, tip', 'length', 'max'=>45),
			array('opis', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('idObjekat, naziv, adresa, grad, tip, opis', 'safe', 'on'=>'search'),
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
			'kategorijes' => array(self::MANY_MANY, 'Kategorije', 'objekat_has_kategorija(Objekat_idObjekat, Kategorija_idKategorija)'),
			'ocjenes' => array(self::HAS_MANY, 'Ocjene', 'Objekat_idObjekat'),
			'recenzijes' => array(self::HAS_MANY, 'Recenzije', 'Objekat_idObjekat'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'idObjekat' => 'Id Objekat',
			'naziv' => 'Naziv',
			'adresa' => 'Adresa',
			'grad' => 'Grad',
			'tip' => 'Tip',
			'opis' => 'Opis',
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

		$criteria->compare('idObjekat',$this->idObjekat);
		$criteria->compare('naziv',$this->naziv,true);
		$criteria->compare('adresa',$this->adresa,true);
		$criteria->compare('grad',$this->grad,true);
		$criteria->compare('tip',$this->tip,true);
		$criteria->compare('opis',$this->opis,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Objekat the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
